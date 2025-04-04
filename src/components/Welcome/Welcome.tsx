import estilo from './Welcome.module.css';
import { useEffect, useState } from 'react'
import AlunoRequests from '../../fetch/AlunoRequests';
import LivroRequests from '../../fetch/LivroRequests';
import EmprestimoRequests from '../../fetch/EmprestimoRequests';

function Welcome() {
    const [alunos, setAlunos] = useState('');

    useEffect(() => {
        const fetchAlunos = async() =>{
            try {
                const aluno =  await AlunoRequests.listarAlunos();
                setAlunos(JSON.stringify(aluno))
                console.table(alunos);
            } catch (error) {
                console.error(`Erro ao buscar alunos: ${error}`)
            } 
        } 
        fetchAlunos();
    }, [alunos]);

    return (
        <main className={estilo.principal}>
            <p>Seja bem-vindo(a) à biblioteca.</p>
            <p>Para ter uma melhor experiência, faça o login no sistema</p>
            
        </main>
    );
}

export default Welcome;