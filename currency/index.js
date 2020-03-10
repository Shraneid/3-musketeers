// IMPORTS
const axios = require('axios');
const money = require('money');

// constants definition
const RATES_URL = 'https://api.exchangeratesapi.io/latest';
const BLOCKCHAIN_URL = 'https://blockchain.info/ticker';
const CURRENCY_BITCOIN = 'BTC';

// function to check if one of the 2 currencies is BITCOIN
const isAnyBTC = (from, to) => [from, to].includes(CURRENCY_BITCOIN);

module.exports = async opts => {
  // We take in the parameters given by the user
  const { amount = 1, from = 'USD', to = CURRENCY_BITCOIN } = opts;
  const promises = [];
  let base = from;

  // Check if one of the 2 currencies is BITCOIN
  const anyBTC = isAnyBTC(from, to);

  // if we have bitcoin as one of our currencies then we can add in a 
  // special parameter for axios to query what we want
  if (anyBTC) {
    base = from === CURRENCY_BITCOIN ? to : from;
    promises.push(axios(BLOCKCHAIN_URL));
  }

  // Perform our main query to the API
  promises.unshift(axios(`${RATES_URL}?base=${base}`));

  try {
    // waiting for all promises to resolve
    const responses = await Promise.all(promises);
    const [rates] = responses;

    // Saving rates for later conversion
    money.base = rates.data.base;
    money.rates = rates.data.rates;

    const conversionOpts = {
      from,
      to
    };

    // If we have bitcoin then we get 2 API calls, therefore we need to
    // format our data differently
    if (anyBTC) {
      const blockchain = responses.find(response =>
        response.data.hasOwnProperty(base)
      );

      Object.assign(money.rates, {
        'BTC': blockchain.data[base].last
      });
    }

    // Same
    if (anyBTC) {
      Object.assign(conversionOpts, {
        'from': to,
        'to': from
      });
    }

    // Actual conversion using the library
    return money.convert(amount, conversionOpts);
  } catch (error) {
    // If it fails somewhere, we catch the error
    throw new Error(
      '💵 Please specify a valid `from` and/or `to` currency value!'
    );
  }
};
