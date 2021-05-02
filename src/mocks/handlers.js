import { rest } from 'msw'

// Generate random string caracter, simulate token
function makeid(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('');
} 

// Handles dummy simulate rest api back-end
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

  rest.post('/data', (req, res, ctx) => {
    try {
      let data = sessionStorage.getItem('balance');
      data = data !== null && JSON.parse(data);
      let initialBalance = [
        {
          id: 1,
          date: '01/01/2020 05:24 PM',
          type: 'Ingreso',
          category: '2',
          ammount: '1000',
          description: '',
          title: ''
        },
        {
          id: 2,
          date: '11/01/2020 02:24 PM',
          type: 'Egreso',
          category: '1',
          ammount: '-500',
          description: '',
          title: ''
        },
      ];
      if(initialBalance.length > 0) {
        //if(data === null || data.length === 0) {
          sessionStorage.setItem('balance', JSON.stringify(initialBalance));
        //}
        return res(
          ctx.status(200),
        )
      }else {
        return res(
          ctx.status(500),
          ctx.json({
            errorMessage: 'Internal server error',
          }),
        )
      }
    }catch(e) {
      return res(
        ctx.status(500),
        ctx.json({
          errorMessage: 'Internal server error',
        }),
      )
    }
  }),

  rest.get('/balance/:token', (req, res, ctx) => {
    try {
      const { token } = req.params;
      let sessionToken = JSON.parse(sessionStorage.getItem('token'));

      if(token !== sessionToken.access_token) {
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: 'Not authorized',
          }),
        )
      }
      
      let data = sessionStorage.getItem('balance');
      if (!data) {
        return res(
          ctx.status(400),
          ctx.json({
            errorMessage: 'Data not found',
          }),
        )
      }
      return res(
        ctx.status(200),
        ctx.json(
          data,
        ),
      )
    }catch(e) {
      return res(
        ctx.status(500),
        ctx.json({
          errorMessage: 'Internal server error',
        }),
      )
    }
  }),

  rest.delete('/balance/:token/:id', (req, res, ctx) => {
    try {
      const { token, id } = req.params;
      let sessionToken = JSON.parse(sessionStorage.getItem('token'));
      if(token !== sessionToken.access_token) {
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: 'Not authorized',
          }),
        )
      }
      const currentData = sessionStorage.getItem('balance');
      const arr = JSON.parse(currentData);
      let newArr = arr.filter(item => item.id !== parseInt(id));
  
      if(newArr) {
        sessionStorage.setItem('balance', JSON.stringify(newArr));
      }

      return res(
        ctx.status(200),
        ctx.json(
          newArr
        ),
      )
    }catch(e) {
      return res(
        ctx.status(500),
        ctx.json({
          errorMessage: 'Internal server error',
        }),
      )
    } 
  }),

  rest.post('/balance/:token', (req, res, ctx) => {
    try {
      const { token } = req.params;
      const { item } = req.body;
      let sessionToken = JSON.parse(sessionStorage.getItem('token'));
      if(token !== sessionToken.access_token) {
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: 'Not authorized',
          }),
        )
      }
      let currentData = JSON.parse(sessionStorage.getItem('balance'));
      const lastId = currentData.reduce(
        (r, e) => {
          return r + e.id
        },
        0
      );

      item.id = lastId;
      currentData.push(item);
      
      sessionStorage.setItem('balance', JSON.stringify(currentData));
      
      if(true) {
        return res(
          ctx.status(200),
          ctx.json(
            currentData
          ),
        )
      }
    }catch(e) {
      return res(
        ctx.status(500),
        ctx.json({
          errorMessage: 'Internal server error',
        }),
      )
    }
  }),
]