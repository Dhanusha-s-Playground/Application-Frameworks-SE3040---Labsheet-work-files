/**
 * MIT License
 *
 * Copyright (c) 2021 Dhanusha Perera
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * @author : Dhanusha Perera
 * @since : 20/03/2021
 */

const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
require('./dal/post-dao-impl');

const HomeRoutes = require('./route/home.router'); // router we have created in the home.router.js
const PostRoutes = require('./route/post.router');
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

app.use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods());

app.use(PostRoutes.routes()).use(PostRoutes.allowedMethods());

// app.use(serve('./public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Application is running on port 3000');
    }
});

