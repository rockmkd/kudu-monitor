export const MOCK_DATA = {
    hosts: [
        'mock-server1',
        'mock-server2',
        'mock-server3'
    ],
    metrics: {
        'mock-server1': [
            {
                "type": "tablet",
                "id": "c0ebf9fef1b847e2a83c7bd35c2056b1",
                "attributes": {
                    "table_name": "lineitem",
                    "partition": "hash buckets: (55), range: [(<start>), (<end>))",
                    "table_id": ""
                },
                "metrics": [
                    {
                        "name": "log_append_latency",
                        "total_count": 7498,
                        "min": 4,
                        "mean": 69.3649,
                        "percentile_75": 29,
                        "percentile_95": 38,
                        "percentile_99": 45,
                        "percentile_99_9": 95,
                        "percentile_99_99": 167,
                        "max": 367244,
                        "total_sum": 520098
                    }
                ]
            }
        ],
        'mock-server2': [
            {
                "type": "tablet",
                "id": "c0ebf9fef1b847e2a83c7bd35c2056b1",
                "attributes": {
                    "table_name": "lineitem",
                    "partition": "hash buckets: (55), range: [(<start>), (<end>))",
                    "table_id": ""
                },
                "metrics": [
                    {
                        "name": "log_append_latency",
                        "total_count": 7498,
                        "min": 4,
                        "mean": 69.3649,
                        "percentile_75": 29,
                        "percentile_95": 38,
                        "percentile_99": 45,
                        "percentile_99_9": 95,
                        "percentile_99_99": 167,
                        "max": 367244,
                        "total_sum": 520098
                    }
                ]
            }
        ],
        'mock-server3': [
            {
                "type": "tablet",
                "id": "c0ebf9fef1b847e2a83c7bd35c2056b1",
                "attributes": {
                    "table_name": "lineitem",
                    "partition": "hash buckets: (55), range: [(<start>), (<end>))",
                    "table_id": ""
                },
                "metrics": [
                    {
                        "name": "log_append_latency",
                        "total_count": 7498,
                        "min": 4,
                        "mean": 69.3649,
                        "percentile_75": 29,
                        "percentile_95": 38,
                        "percentile_99": 45,
                        "percentile_99_9": 95,
                        "percentile_99_99": 167,
                        "max": 367244,
                        "total_sum": 520098
                    }
                ]
            }
        ]
    }
}

