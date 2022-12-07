import { knowledgeData } from "./knowledgeData";

function KnowledgeItems() {
  const knowledgeItems = knowledgeData.map((skill) => (
    <li key={skill} className="w-2/4 pb-6 pl-7">
      <div className="">
        <span className="paragraph-dot inline-block px-3 py-2 rounded bg-slate-50 shadow before:top-2/4 before:-translate-y-2/4  before:-left-4">
          {skill}
        </span>
      </div>
    </li>
  ));

  return <ul className="py-6 flex flex-wrap">{knowledgeItems}</ul>;
}

export default KnowledgeItems;
