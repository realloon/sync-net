import Router from 'koa-router'

const router = new Router()

/**
 * @type {Array<string>}
 */
const clipboardStack = ['剪贴板初始内容']

router.get('/clipboard', async ctx => {
  ctx.body = {
    code: 1000,
    message: '读取成功',
    data: clipboardStack,
  }
})

router.get('/clipboard/:index', async ctx => {
  const index = ctx.params.index

  if (index < 0 || index >= clipboardStack.length) {
    ctx.body = {
      code: 2000,
      message: '索引值无效',
    }
    ctx.status = 404
  } else {
    ctx.body = {
      code: 1000,
      message: '读取成功',
      data: clipboardStack[index],
    }
  }
})

router.post('/clipboard', async ctx => {
  console.log('这里可以执行吗')

  const { content } = ctx.request.body

  if (!content) {
    ctx.body = {
      code: 2001,
      message: '内容不能为空',
    }
    ctx.status = 400
  } else {
    clipboardStack.push(content)
    ctx.body = {
      code: 1000,
      message: '添加成功',
      data: content,
    }
    ctx.status = 201
  }
})

router.delete('/clipboard', async ctx => {
  clipboardStack.splice(0, clipboardStack.length)

  ctx.body = {
    code: 1000,
    message: '删除成功',
    data: clipboardStack,
  }
})

export default router
