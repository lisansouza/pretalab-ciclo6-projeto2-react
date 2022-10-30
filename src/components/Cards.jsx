import { list } from '../data/projects'
import { Subtitle } from "./Subtitle"
import { Text } from "./Text"
import { Image } from "./Image"
import { Link } from './Link'


export function Cards () {
  return (
    <div className="cards">
        {list.map(project => {
        return(
          <div key={project.id} className="card">
            <Subtitle text={project.nome} />
            <Link url={project.link}>Veja aqui</Link>
            <Text paragraph={project.descricao} />
            <Image link={project.imagem} />
          </div>
        )
      })}
      </div>
  )
}