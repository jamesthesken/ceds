import { UsersIcon } from "@heroicons/react/24/outline"

const data = [
    { metric: 'Population Estimates, July 2021', value: '73,454'},
  ]

export default function People() {
    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Population</h1>
            <p className="mt-2 text-sm text-gray-700">
                Source: U.S. Census
            </p>
            </div>
        </div>
        <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Metric
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Kauai, Hawaii
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((data) => (
                        <tr key={data.metric}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {data.metric}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
  