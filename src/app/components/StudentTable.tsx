import { Student } from "@/types/Student";
type Props = {
  students: Student[];
};
export const StudentTable = ({ students }: Props) => {
  return (
    <table className="w-full border border-gray-700 rounded-md overflow-hidden">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Status</th>
          <th>Grade1</th>
          <th>Grade2</th>
          <th>Grade final</th>
        </tr>
      </thead>
      <tbody>
        {students.map((item) => (
          <tr key={item.id} className="text-gray-800 bg-gray-400">
            <td className=" p3 flex items-center">
              <img
                src={item.avatar}
                className="w-10 h-10 rounded-full mr-3"
              ></img>
              <div>
                <div>{item.name}</div>
                <div>{item.email}</div>
              </div>
            </td>
            <td>
              {item.active && (
                <div className="px-2 py-1 inline-block rounded-md border-green-800 bg-green-500 text-white text-xs">
                  Active
                </div>
              )}
              {!item.active && (
                <div className="px-2 py-1 inline-block rounded-md border-red-800 bg-red-500 text-white text-xs">
                  Inativo
                </div>
              )}
            </td>
            <td>
              <div>{item.grade1}</div>
            </td>
            <td>
              <div>{item.grade2}</div>
            </td>
            <td>{(item.grade1 + item.grade2) / 2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
