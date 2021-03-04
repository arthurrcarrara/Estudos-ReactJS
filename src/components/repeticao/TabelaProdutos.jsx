import './TabelaProdutos.css'
import React from "react";
import produtos from "../../data/produtos";

export default (props) => {

  const produtosTR = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 ? 'Par' : 'Impar'}>
        <td>{produto.id}</td>
        <td>{produto.nomeProduto}</td>
        <td>R$ {produto.preco}</td>
      </tr>
    );
  });


  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
            <tr>
            <td>ID</td>
            <td>Idade</td>
            <td>Profissao</td>
            </tr>
        </thead>
        <tbody>
            {produtosTR}
        </tbody>
      </table>
    </div>
  );
};
