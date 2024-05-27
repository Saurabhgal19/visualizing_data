const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// collection name is 'insights'
const insightSchema = new mongoose.Schema({}, { strict: false });
const Insight = mongoose.model('Insight', insightSchema, 'insights');


router.get('/', async (req, res) => {
    try {
        const {
            end_year, country, topic, region, intensity, likelihood, relevance, start_year,
            sector, pestle, source, city, impact, ...rest
        } = req.query;
        
        const filters = {};

        //if (start_year) filters.start_year = start_year;
        if (start_year) filters.start_year = Number(start_year);
        //if (end_year) filters.end_year = end_year;
        if (end_year) filters.end_year = Number(end_year);
        if (country) filters.country = country;
        if (topic) filters.topic = { $in: topic.split(',') };
        if (region) filters.region = region;
        if (sector) filters.sector = sector;
        if (pestle) filters.pestle = pestle;
        if (source) filters.source = source;
        if (city) filters.city = city;
        if (intensity) filters.intensity = { $gte: Number(intensity) };
        if (likelihood) filters.likelihood = { $gte: Number(likelihood) };
        if (relevance) filters.relevance = { $gte: Number(relevance) };
        if (impact) filters.impact = impact;

        Object.assign(filters, rest);

        const insights = await Insight.find(filters);
        res.json(insights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
