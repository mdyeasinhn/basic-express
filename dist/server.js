"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const express_1 = __importDefault(require("express"));
const port = 5000;
let server;
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        server = app_1.default.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    });
}
// Middleware to parse JSON body
app_1.default.use(express_1.default.json());
app_1.default.post('/', (req, res) => {
    console.log(req.body);
    res.send('Data received');
});
bootstrap();
exports.default = app_1.default;
