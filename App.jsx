import React from 'react';
import { Carrinho, ListaDesejos, HistoricoCompras } from './componentesLoja';
import './Loja.css';

export default function App() {
  const produtosCarrinho = [
    { nome: 'Fone de Ouvido Bluetooth', preco: 189.90 },
    { nome: 'Mouse Sem Fio Ergônomico', preco: 95.00 },
    { nome: 'Webcam Full HD 1080p com Microfone', preco: 219.90 },
    { nome: 'Mousepad Gamer Extra Grande 90x40cm', preco: 69.90 },
    { nome: 'Luminária de Barra para Monitor (Lightbar)', preco: 179.90 },
  ];

  const produtosDesejos = [
    { nome: 'Monitor 27" Full HD' },
    { nome: 'Teclado Mecânico RGB' },
    { nome: 'Braço Articulado Hidráulico para Monitor' },
    { nome: 'Tablet para Estudos com Caneta Touch' },
  ];

  const produtosHistorico = [
    { nome: 'Cadeira de Escritório', dataCompra: '10/10/2026' },
    { nome: 'Suporte para Notebook', dataCompra: '02/11/2026' },
    { nome: 'Kindle Paperwhite 16GB Tela 6.8"' },
    { nome: 'Carregador Rápido GaN 65W USB-C', dataCompra: '15/08/2026' },
  ];

  return (
    <main className="loja-container">
      <h1>Minha Conta - Área de Compras</h1>
      <div className="colunas-grid">
        <Carrinho produtos={produtosCarrinho} />
        <ListaDesejos produtos={produtosDesejos} />
        <HistoricoCompras produtos={produtosHistorico} />
      </div>
    </main>
  );
}
