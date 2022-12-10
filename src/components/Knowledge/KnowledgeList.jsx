import { knowledgeData } from "./knowledgeData";

function KnowledgeList() {
  const knowledgeItems = knowledgeData.map((skill) => (
    <li key={skill} className="pb-1 pl-7 col-span-6">
      <div className="">
        <span className="paragraph-dot inline-block px-3 py-2 rounded bg-slate-50 shadow pd-lc">
          {skill}
        </span>
      </div>
    </li>
  ));

  return (
    <ul className="para-max-w py-6 grid grid-cols-12 gap-5">{knowledgeItems}</ul>
  );
}

export default KnowledgeList;
