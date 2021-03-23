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

const Router = require('@koa/router');
const router = new Router({prefix: '/post'});
const postAPI = require('../api/posts.api');

router.get('/:id', (ctx) => {
    const id = ctx.params.id;
    if (id && id != '') {
        const post = postAPI.getPost(id);
        if (post != undefined) {
            ctx.response.status = 200;
            ctx.response.type = 'application/json';
            ctx.response.body = JSON.stringify(post);
        } else {
            ctx.response.status = 404;
        }
    } else {
        ctx.response.status = 400;
    }
});

router.get('/', (ctx) => {
    ctx.response.status = 200;
    ctx.type = 'application/json';
    ctx.response.body = postAPI.getPosts();
});

router.post('/', (ctx) => {
    if (ctx.request.type == 'application/json') {
        const dataOfThePost = ctx.request.body;
        if (dataOfThePost.name && dataOfThePost.description) {
            const result = postAPI.createPost(dataOfThePost.name, dataOfThePost.description);
            if (result) {
                ctx.response.status = 201;
                ctx.response.type = 'application/json';
                ctx.response.body = JSON.stringify({id: result});
            } else {
                ctx.response.status = 500;
            }
        } else {
            ctx.response.status = 400;
        }
    } else {
        ctx.response.status = 400;
        console.error('unknown data type: only JSON request is valid.');
    }

});


router.put('/:id', (ctx) => {
    const idParam = ctx.params.id;
    const dataOfThePost = ctx.request.body;
    if (idParam && dataOfThePost.id && idParam === dataOfThePost.id) {
        updateAPost(ctx);
    }  else {
        ctx.response.status = 400;
    }
});

router.put('/', (ctx) => {
    updateAPost(ctx);
});


/** this method handles the update process */
function updateAPost(ctx) {
    if (ctx.request.type == 'application/json') {
        const dataOfThePost = ctx.request.body;
        if (dataOfThePost.id && dataOfThePost.name && dataOfThePost.description) {
            const result = postAPI.updatePost(dataOfThePost.id, dataOfThePost.name, dataOfThePost.description);
            if (result == 404) {
                ctx.response.status = 404;
            } else if (result) {
                ctx.response.status = 200;
            } else {
                ctx.response.status = 500;
            }
        } else {
            ctx.response.status = 400;
        }
    } else {
        ctx.response.status = 400;
        console.error('unknown data type: only JSON request is valid.');
    }
}


router.delete('/:id', (ctx) => {
    if (ctx.params.id) {
        const id = ctx.params.id;
        if (postAPI.deletePost(id)) {
            ctx.response.status = 204;
        } else {
            ctx.response.status = 404;
        }
    } else {
        ctx.response.status = 400;
    }
});

router.delete('/', (ctx) => {
    ctx.response.status = 405;
});


module.exports = router;

