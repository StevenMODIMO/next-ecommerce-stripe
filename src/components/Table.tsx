"use client";

export default function Table() {
  return (
    <div className="my-12">
      <header className="text-gray-800 text-base font-medium">
        <h1>My Table</h1>
      </header>
      <table className="p-3 my-4 table-auto border-collapse border-spacing-3 shadow rounded">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="p-3 text-start">Head</th>
            <th className="p-3 text-start">Body</th>
            <th className="p-3 text-start">Thorax</th>
            <th className="p-3 text-start">Action</th>
            <th className="p-3 text-start">More</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 1</td>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 2</td>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 3</td>
          </tr>
          <tr>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 1</td>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 2</td>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 3</td>
          </tr>
          <tr>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 1</td>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 2</td>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 3</td>
          </tr>
          <tr>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 1</td>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 2</td>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 3</td>
          </tr>
          <tr>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 1</td>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 2</td>
            <td className="px-3 py-6 text-start">Lorem Ipsum dolor 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
