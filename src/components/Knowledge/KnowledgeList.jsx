import { knowledgeData } from "./knowledgeData";

function KnowledgeList() {
  const knowledgeItems = knowledgeData.map((skill) => (
    <li key={skill} className="w-2/4 pb-6 pl-7">
      <div className="">
        <span className="paragraph-dot inline-block px-3 py-2 rounded bg-slate-50 shadow pd-lc">
          {skill}
        </span>
      </div>
    </li>
  ));

  return (
    <ul className="max-w-[550px] py-6 flex flex-wrap">{knowledgeItems}</ul>
  );
}

export default KnowledgeList;
