const NomeContext = React.createContext('nome')

        function MeuComponente(props) {
          
            return (
                <div id="componentes">
                    <MeuComponente1 onClickIncrementar={props.onClickIncrementar} onClickReset={props.onClickReset}/>
                </div>
            )
        }

        function MeuComponenteIrmao(props) {
            return (
                <div id="componenteIrmao">
                    <MeuComponenteIrmao2 contador={props.contador}/>
                </div>
            )
        }

        function MeuComponenteIrmao2(props) {
            React.useEffect(function() {
                localStorage.setItem('contador', props.contador)
            });
            return (
                <h2>Contador: {props.contador}</h2>
            )
        }

        function AppComponente() {
            const [contador, incrementaContador] = React.useState(parseInt(localStorage.getItem('contador'),10) || 0)

            const clickIncrementa = function() {
                incrementaContador(contador + 1)
            }

            const clickReset = function() {
                incrementaContador(0)
            }

            return(
                <React.Fragment>
                    <MeuComponente onClickIncrementar={clickIncrementa} onClickReset={clickReset}/>
                    <MeuComponenteIrmao contador={contador}/>
                </React.Fragment>
            )
        }

        function MeuComponente1(props) {
            const meuNome = 'Antonio Victor de Souza'
            return (
                <div className="componente1">
                    <MeuComponente2>
                        <MeuComponente3 onClickIncrementar={props.onClickIncrementar} onClickReset={props.onClickReset}/>
                    </MeuComponente2>
                </div>   
            )
        }

        function MeuComponente2(props) {
            return (
                <div className="componente2">
                    <div>
                        <header>{props.children}</header>
                        <footer></footer>
                    </div>
                </div>
            )
        }

        function MeuComponente3(props) {
            const [telefone, setTelefone] = React.useState('21 99776-8800')

            setTimeout(function() {
                setTelefone('999999999')
            }, 2000)
            return (
                <div className="componente3">
                    <MeuComponente4 telefone={telefone} onClickIncrementar={props.onClickIncrementar} onClickReset={props.onClickReset}/>
                </div>
            )
        }

        function MeuComponente4(props) {
           const [idade, setIdade] = React.useState(26)
           
           setTimeout(function() {
               setIdade(30)
           }, 2000)

            return (      
                <div className="componente4">
                    <p>Componente 4: {idade}, {props.telefone}</p>
                    <button type="button" onClick={props.onClickIncrementar}>Incrementar</button>
                    <button type="button" onClick={props.onClickReset}>Resetar</button>
                </div>
            )  
        }

        ReactDOM.render(
            <AppComponente />,
            document.getElementById('app')
        )