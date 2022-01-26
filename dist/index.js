'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const app = (0, express_1.default)();
const port = 5000;
app.use('/', (req, res) => {
  res.status(200).send({ data: 'Hello from Ornio AS' });
});
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
//# sourceMappingURL=index.js.map
