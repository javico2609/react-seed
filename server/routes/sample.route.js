const express = require('express');
const router = express.Router();
const sampleSvc = require('../services/sample.service');

router.get('/', (request, response, next) => {
	sampleSvc
		.getAll()
		.then(result => response.send(result))
		.catch(err => next(err));
});

router.get('/:id', (request, response, next) => {
	sampleSvc
		.get(request.params.id)
		.then(result => response.send(result))
		.catch(err => next(err));
});

router.post('/', (request, response, next) => {
	sampleSvc
		.insert(request.body)
		.then(result => response.send(result))
		.catch(err => next(err));
});

module.exports = router;
