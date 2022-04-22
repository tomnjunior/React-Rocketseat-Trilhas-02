import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model, Server } from 'miragejs';
import { App } from './App';

createServer({

  models:{
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Wesite',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          creat
        }
      ]
    })
  }

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })    
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);