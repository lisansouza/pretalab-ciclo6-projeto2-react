export const Card = ({ subject }) => {
  return (
    <div key={subject.id} className="card">
      <h2>{subject.name}</h2>
      <img src={subject.gif} width="300" />
      <p>{subject.description}</p>
      <a target="_blank" href={subject.moreAbout}>
        Clique para mais informações
      </a>
    </div>
  );
};
