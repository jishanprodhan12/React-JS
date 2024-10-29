
import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function LineChart() {
    const subjectMarks = [
        {
            "id": 1,
            "name": "Alice",
            "math": 78,
            "physics": 85,
            "chemistry": 88
        },
        {
            "id": 2,
            "name": "Bob",
            "math": 92,
            "physics": 78,
            "chemistry": 81
        },
        {
            "id": 3,
            "name": "Charlie",
            "math": 65,
            "physics": 72,
            "chemistry": 70
        },
        {
            "id": 4,
            "name": "David",
            "math": 88,
            "physics": 90,
            "chemistry": 85
        },
        {
            "id": 5,
            "name": "Eva",
            "math": 76,
            "physics": 83,
            "chemistry": 89
        },
        {
            "id": 6,
            "name": "Frank",
            "math": 81,
            "physics": 76,
            "chemistry": 79
        },
        {
            "id": 7,
            "name": "Grace",
            "math": 70,
            "physics": 74,
            "chemistry": 80
        },
        {
            "id": 8,
            "name": "Hannah",
            "math": 84,
            "physics": 88,
            "chemistry": 92
        },
        {
            "id": 9,
            "name": "Ian",
            "math": 77,
            "physics": 85,
            "chemistry": 86
        },
        {
            "id": 10,
            "name": "Jack",
            "math": 90,
            "physics": 82,
            "chemistry": 87
        }
    ]

    return (
        <div className='w-11/12 mx-auto border-2 '>

            <LChart width={600} height={400} data={subjectMarks}>
                <Line type={'monotone'} dataKey={'math'} stroke='red' />
                <Line type={'monotone'} dataKey={'physics'} stroke='purple' />
                <Line type={'monotone'} dataKey={'chemistry'} stroke='black' />
                <XAxis dataKey={'name'}></XAxis>
                <YAxis />
                <CartesianGrid />
                <Tooltip />
            </LChart>
        </div>
    )
}
