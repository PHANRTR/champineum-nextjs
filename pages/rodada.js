import axios from 'axios'
import Image from 'next/image';
import React from 'react'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
import styles from '../styles/Rodada.module.css'

const columns =[
{
  Header: 'Time',
  accessor: 'time_mandante'
},
{
  Header: 'Clube Mandante',
  accessor: 'clube_mandante'
},
{
  Header: 'Clube Visitante',
  accessor: 'clube_visitante'
},
{
  Header: 'Time',
  accessor: 'time_visitante'
}];

function Rodada({rodada, clubes}) {

  let rodadas = [];
  if(rodada.partidas != null) {
    for (let i = 0; i < rodada.partidas.length; i++) {
      let mandante = rodada.clubes[rodada.partidas[i].clube_casa_id];
      let visitante = rodada.clubes[rodada.partidas[i].clube_visitante_id];
      
      let mandante_cartola = clubes.filter(clube => clube.represents_team == mandante.id);
      let visitante_cartola = clubes.filter(clube => clube.represents_team == visitante.id);

      let nome_mandante =  mandante_cartola.length > 0? mandante_cartola[0].nome : "";
      let nome_visitante = visitante_cartola.length > 0? visitante_cartola[0].nome : "";


      rodadas.push( {
                      "time_mandante": <Image size='mini' src={mandante.escudos['45x45']} width='30' height='30' />,
                      "clube_mandante": nome_mandante,
                      "clube_visitante": nome_visitante,
                      "time_visitante": <Image size='mini' src={visitante.escudos['45x45']} width='30' height='30' />
                    });
    }
  }

  return (
    <ReactTable
      data={rodadas}
      columns={columns}
      defaultPageSize={10}
      className={styles.table}
    />
  );
}

export async function getStaticProps() {
  const ret = await axios.get(process.env.URL_ENDPOINT +  '/api/partidas')
  const rodada = await ret.data

  const res = await axios.get(process.env.URL_ENDPOINT +  '/api/clubes')
  const clubes = await res.data.result

  return {
    props: {
      rodada,
      clubes,
    },
  }
}

export default Rodada;