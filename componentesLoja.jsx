import React from 'react';

export function Carrinho({ produtos }) {
  return (
    <section className="coluna">
      <h2>Carrinho ({produtos.length})</h2>
      <ul>
        {produtos.map((produto, index) => (
          <li key={index} className="card">
            <strong>{produto.nome}</strong>
            <span>
              Preço: R$ {produto.preco.toFixed(2).replace('.', ',')}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ListaDesejos({ produtos }) {
  return (
    <section className="coluna">
      <h2>Lista de Desejos ({produtos.length})</h2>
      <ul>
        {produtos.map((produto, index) => (
          <li key={index} className="card">
            <strong>{produto.nome}</strong>
            <span>Salvo para comprar depois</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HistoricoCompras({ produtos }) {
  return (
    <section className="coluna">
      <h2>Histórico de Compras ({produtos.length})</h2>
      <ul>
        {produtos.map((produto, index) => (
          <li key={index} className="card">
            <strong>{produto.nome}</strong>
            <span>Comprado em: {produto.dataCompra}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
