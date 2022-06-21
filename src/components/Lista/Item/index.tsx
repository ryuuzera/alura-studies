import { ITarefa } from '../../../interfaces/tarefas';
import style from '../Lista.module.scss';
import toast, { Toaster } from 'react-hot-toast';

interface Props extends ITarefa {
	selecionaTarefa: (tarefaSelecionada: ITarefa) => void
};

export default function Item({tarefa, 
 tempo,
 selecionado, 
 completado, 
 id,
 selecionaTarefa }: Props) {
	console.log('item atual: ', {
		tarefa, tempo, selecionado, completado, id
	});
	const notify = () => toast.success('Selecionou ' + tarefa);
	return(
		<li 
			className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
			onClick={() => { 
			selecionaTarefa({
			tarefa,
			tempo,
			selecionado, 
			completado,
			id})
			notify();
		}}>
		<h3> {tarefa} </h3>
		<span> {tempo} </span>
		<Toaster />
		</li>
	)
}
