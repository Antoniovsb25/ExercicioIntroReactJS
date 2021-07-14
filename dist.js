const NomeContext = React.createContext('nome');

function MeuComponente(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, {
    onClickIncrementar: props.onClickIncrementar,
    onClickReset: props.onClickReset
  }));
}

function MeuComponenteIrmao(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componenteIrmao"
  }, /*#__PURE__*/React.createElement(MeuComponenteIrmao2, {
    contador: props.contador
  }));
}

function MeuComponenteIrmao2(props) {
  React.useEffect(function () {
    localStorage.setItem('contador', props.contador);
  });
  return /*#__PURE__*/React.createElement("h2", null, "Contador: ", props.contador);
}

function AppComponente() {
  const [contador, incrementaContador] = React.useState(parseInt(localStorage.getItem('contador'), 10) || 0);

  const clickIncrementa = function () {
    incrementaContador(contador + 1);
  };

  const clickReset = function () {
    incrementaContador(0);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeuComponente, {
    onClickIncrementar: clickIncrementa,
    onClickReset: clickReset
  }), /*#__PURE__*/React.createElement(MeuComponenteIrmao, {
    contador: contador
  }));
}

function MeuComponente1(props) {
  const meuNome = 'Antonio Victor de Souza';
  return /*#__PURE__*/React.createElement("div", {
    className: "componente1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente3, {
    onClickIncrementar: props.onClickIncrementar,
    onClickReset: props.onClickReset
  })));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, props.children), /*#__PURE__*/React.createElement("footer", null)));
}

function MeuComponente3(props) {
  const [telefone, setTelefone] = React.useState('21 99776-8800');
  setTimeout(function () {
    setTelefone('999999999');
  }, 2000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, {
    telefone: telefone,
    onClickIncrementar: props.onClickIncrementar,
    onClickReset: props.onClickReset
  }));
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(26);
  setTimeout(function () {
    setIdade(30);
  }, 2000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente4"
  }, /*#__PURE__*/React.createElement("p", null, "Componente 4: ", idade, ", ", props.telefone), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: props.onClickIncrementar
  }, "Incrementar"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: props.onClickReset
  }, "Resetar"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponente, null), document.getElementById('app'));
