import { knowledgeData } from './knowledgeData';

function KnowledgeList() {
  const knowledgeItems = knowledgeData.map((skill) => (
    <li key={skill} className="col-span-6 pb-1 pl-7">
      <div className="">
        <span className="paragraph-dot pd-lc inline-block rounded bg-slate-50 px-3 py-2 shadow">
          {skill}
        </span>
      </div>
    </li>
  ));

  return (
    <ul className="para-max-w grid grid-cols-12 gap-5 py-6">
      {knowledgeItems}
    </ul>
  );
}

export default KnowledgeList;
