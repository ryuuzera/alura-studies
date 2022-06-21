import { ITarefa } from '../../interfaces/tarefas';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}> {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  addTarefa(e: React.FormEvent){
    e.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [...tarefasAntigas,
     						{...this.state,
     						selecionado: false,
     						completado: false,
     						id: uuidv4() }]);
    this.setState({
    	tarefa: "",
    	tempo: "00:00"
    })
  }
  render() {
    return (
      <form className={style.novaTarefa}
       onSubmit={this.addTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={e => { 
              e.target.value = e.target.value.replace('.','')
              this.setState({...this.state, tarefa: e.target.value})}}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            value={this.state.tempo}
            onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
            min="00:00:00"
            max="99:99:00"
            required
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    )
  }
}

export default Formulario;
