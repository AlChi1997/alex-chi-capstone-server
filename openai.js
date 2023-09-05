const openai = require('openai');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

const client = new openai({ key: apiKey });

module.exports=client;