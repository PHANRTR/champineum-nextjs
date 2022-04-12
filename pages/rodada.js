import axios from 'axios'
import Image from 'next/image';
import React from 'react'
import { Text, Badge, Table, Thead, Tbody, Tr, Th,Td, TableContainer, Container, Box, Grid, GridItem} from '@chakra-ui/react'

function Rodada({rodada, clubes, status }) {

  let rodadas = [];

  const a = new Date(status.fechamento.timestamp * 1000);
  const hours = a.getHours();
  const minutes = "0" + a.getMinutes();
  const seconds = "0" + a.getSeconds();
  var months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  const formattedTime = date + ' ' + month + ' ' + year + ' ' +  hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

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
<Grid
  h='300px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(3, 1fr)'
  gap={3} >
    <GridItem colSpan={1}>
      <Text fontSize='xl'>
        Rodada: 
        <Badge ml='1' fontSize='0.8em' colorScheme='green'>
          {status.rodada_atual}
        </Badge>
      </Text>
      </GridItem>
      <GridItem colSpan={2}>
      <Text fontSize='xl'>
        Fechamento do mercado:
        <Badge ml='1' fontSize='0.8em' colorScheme='green'>
          {formattedTime}
        </Badge>
      </Text>
      </GridItem>
      <GridItem colSpan={3}>
      <TableContainer w="100%">
        <Table colorScheme='linkedin' type='sm'>
          <Thead>
            <Tr>
              <Th w="10%">Time</Th>
              <Th w="39%">Clube Mandante</Th>
              <Th w="2%"></Th>
              <Th w="39%">Clube Visitante</Th>
              <Th w="10%">Time</Th>
            </Tr>
          </Thead>
          <Tbody>
              {rodadas.map((rodada, i) => (
                <Tr key={i}> 
                  <Td>{rodada.time_mandante}</Td>
                  <Td>{rodada.clube_mandante}</Td>
                  <Td>X</Td>
                  <Td>{rodada.clube_visitante}</Td>
                  <Td>{rodada.time_visitante}</Td>
              </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      </GridItem>
  </Grid>
  );
}

export async function getStaticProps() {
  let ret = await axios.get(process.env.URL_ENDPOINT +  '/api/partidas')
  const rodada = await ret.data

  let res = await axios.get(process.env.URL_ENDPOINT +  '/api/clubes')
  const clubes = await res.data.result

  const res_status = await axios.get(process.env.URL_ENDPOINT +  '/api/status')
  const status = await res_status.data

  return {
    props: {
      rodada,
      clubes,
      status,
    },
  }
}

export default Rodada;