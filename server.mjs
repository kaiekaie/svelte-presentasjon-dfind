import express from 'express';
import rollup from 'express-middleware-rollup';
import path from 'path';
import rollupconfig from './rollup.config.js';
const app = express();
app.use(rollup({ ...rollupconfig }));
app.use(express.static(path.join(__dirname, 'static')));
app.listen(3000);
