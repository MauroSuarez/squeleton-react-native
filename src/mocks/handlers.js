import { rest } from 'msw'

function makeid(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('');
} 

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    let token;
    const { username, password } = req.body;
    if(username.toLowerCase() === 'admin' && password.toLowerCase() === 'admin') {
      token = makeid(60);
      sessionStorage.setItem('token', JSON.stringify({access_token: token}));
      return res(
        ctx.status(200),
        ctx.json({
          username,
          token
        }),
      )
    }else {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }
  }),

  rest.get('/user', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
]