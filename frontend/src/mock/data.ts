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
                "id": "40905d4ba75e41558996b74bb9c0c3a1",
                "attributes": {
                    "partition": "HASH (evnt_offr_id) PARTITION 1",
                    "table_name": "impala::cbs.tdo_applog",
                    "table_id": "12345dfadsf"
                },
                "metrics": [
                    {
                        "name": "memrowset_size",
                        "value": 265
                    },
                    {
                        "name": "on_disk_data_size",
                        "value": 0
                    },
                    {
                        "name": "rows_inserted",
                        "value": 0
                    },
                    {
                        "name": "rows_upserted",
                        "value": 0
                    },
                    {
                        "name": "rows_updated",
                        "value": 0
                    },
                    {
                        "name": "rows_deleted",
                        "value": 0
                    },
                    {
                        "name": "insertions_failed_dup_key",
                        "value": 0
                    },
                    {
                        "name": "upserts_as_updates",
                        "value": 0
                    },
                    {
                        "name": "scanner_rows_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_cells_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_bytes_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_rows_scanned",
                        "value": 0
                    },
                    {
                        "name": "scans_started",
                        "value": 0
                    },
                    {
                        "name": "tablet_active_scanners",
                        "value": 0
                    },
                    {
                        "name": "bloom_lookups",
                        "value": 0
                    },
                    {
                        "name": "key_file_lookups",
                        "value": 0
                    },
                    {
                        "name": "delta_file_lookups",
                        "value": 0
                    },
                    {
                        "name": "mrs_lookups",
                        "value": 0
                    },
                    {
                        "name": "bytes_flushed",
                        "value": 0
                    },
                    {
                        "name": "bloom_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "key_file_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_file_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "commit_wait_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "flush_dms_running",
                        "value": 0
                    },
                    {
                        "name": "flush_mrs_running",
                        "value": 0
                    },
                    {
                        "name": "compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_gc_running",
                        "value": 0
                    },
                    {
                        "name": "flush_dms_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "flush_mrs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "scanner_cells_scanned_from_disk",
                        "value": 0
                    },
                    {
                        "name": "scanner_bytes_scanned_from_disk",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_gc_bytes_deleted",
                        "value": 0
                    },
                    {
                        "name": "write_op_duration_client_propagated_consistency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "write_op_duration_commit_wait_consistency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "snapshot_read_inflight_wait_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_minor_compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "delta_major_compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_estimated_retained_bytes",
                        "value": 0
                    },
                    {
                        "name": "delta_minor_compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_major_compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_init_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_delete_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_perform_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "leader_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "state",
                        "value": "RUNNING"
                    },
                    {
                        "name": "op_prepare_queue_length",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "op_prepare_queue_time",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "op_prepare_run_time",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "on_disk_size",
                        "value": 8410803
                    },
                    {
                        "name": "all_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "write_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "alter_schema_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "transaction_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "log_gc_running",
                        "value": 0
                    },
                    {
                        "name": "log_gc_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "majority_done_ops",
                        "value": 0
                    },
                    {
                        "name": "in_progress_ops",
                        "value": 0
                    },
                    {
                        "name": "ops_behind_leader",
                        "value": 0
                    },
                    {
                        "name": "log_cache_num_ops",
                        "value": 0
                    },
                    {
                        "name": "log_cache_size",
                        "value": 0
                    },
                    {
                        "name": "raft_term",
                        "value": 1
                    },
                    {
                        "name": "follower_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "log_reader_bytes_read",
                        "value": 0
                    },
                    {
                        "name": "log_reader_entries_read",
                        "value": 0
                    },
                    {
                        "name": "log_reader_read_batch_latency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_bytes_logged",
                        "value": 40
                    },
                    {
                        "name": "log_sync_latency",
                        "total_count": 2,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_append_latency",
                        "total_count": 2,
                        "min": 29,
                        "mean": 31.5,
                        "percentile_75": 34,
                        "percentile_95": 34,
                        "percentile_99": 34,
                        "percentile_99_9": 34,
                        "percentile_99_99": 34,
                        "max": 34,
                        "total_sum": 63
                    },
                    {
                        "name": "log_group_commit_latency",
                        "total_count": 2,
                        "min": 58,
                        "mean": 180.5,
                        "percentile_75": 302,
                        "percentile_95": 302,
                        "percentile_99": 302,
                        "percentile_99_9": 302,
                        "percentile_99_99": 302,
                        "max": 303,
                        "total_sum": 361
                    },
                    {
                        "name": "log_roll_latency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_entry_batches_per_group",
                        "total_count": 2,
                        "min": 1,
                        "mean": 1,
                        "percentile_75": 1,
                        "percentile_95": 1,
                        "percentile_99": 1,
                        "percentile_99_9": 1,
                        "percentile_99_99": 1,
                        "max": 1,
                        "total_sum": 2
                    }
                ]
            },
            {
                "type": "tablet",
                "id": "40905d4ba75e41558996b74bb9c0c3a0",
                "attributes": {
                    "partition": "HASH (evnt_offr_id) PARTITION 1",
                    "table_name": "impala::tdo.corebank1",
                    "table_id": "23498sadkfj"
                },
                "metrics": [
                    {
                        "name": "memrowset_size",
                        "value": 265
                    },
                    {
                        "name": "on_disk_data_size",
                        "value": 0
                    },
                    {
                        "name": "rows_inserted",
                        "value": 0
                    },
                    {
                        "name": "rows_upserted",
                        "value": 0
                    },
                    {
                        "name": "rows_updated",
                        "value": 0
                    },
                    {
                        "name": "rows_deleted",
                        "value": 0
                    },
                    {
                        "name": "insertions_failed_dup_key",
                        "value": 0
                    },
                    {
                        "name": "upserts_as_updates",
                        "value": 0
                    },
                    {
                        "name": "scanner_rows_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_cells_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_bytes_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_rows_scanned",
                        "value": 0
                    },
                    {
                        "name": "scans_started",
                        "value": 0
                    },
                    {
                        "name": "tablet_active_scanners",
                        "value": 0
                    },
                    {
                        "name": "bloom_lookups",
                        "value": 0
                    },
                    {
                        "name": "key_file_lookups",
                        "value": 0
                    },
                    {
                        "name": "delta_file_lookups",
                        "value": 0
                    },
                    {
                        "name": "mrs_lookups",
                        "value": 0
                    },
                    {
                        "name": "bytes_flushed",
                        "value": 0
                    },
                    {
                        "name": "bloom_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "key_file_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_file_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "commit_wait_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "flush_dms_running",
                        "value": 0
                    },
                    {
                        "name": "flush_mrs_running",
                        "value": 0
                    },
                    {
                        "name": "compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_gc_running",
                        "value": 0
                    },
                    {
                        "name": "flush_dms_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "flush_mrs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "scanner_cells_scanned_from_disk",
                        "value": 0
                    },
                    {
                        "name": "scanner_bytes_scanned_from_disk",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_gc_bytes_deleted",
                        "value": 0
                    },
                    {
                        "name": "write_op_duration_client_propagated_consistency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "write_op_duration_commit_wait_consistency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "snapshot_read_inflight_wait_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_minor_compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "delta_major_compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_estimated_retained_bytes",
                        "value": 0
                    },
                    {
                        "name": "delta_minor_compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_major_compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_init_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_delete_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_perform_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "leader_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "state",
                        "value": "RUNNING"
                    },
                    {
                        "name": "op_prepare_queue_length",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "op_prepare_queue_time",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "op_prepare_run_time",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "on_disk_size",
                        "value": 8410803
                    },
                    {
                        "name": "all_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "write_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "alter_schema_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "transaction_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "log_gc_running",
                        "value": 0
                    },
                    {
                        "name": "log_gc_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "majority_done_ops",
                        "value": 0
                    },
                    {
                        "name": "in_progress_ops",
                        "value": 0
                    },
                    {
                        "name": "ops_behind_leader",
                        "value": 0
                    },
                    {
                        "name": "log_cache_num_ops",
                        "value": 0
                    },
                    {
                        "name": "log_cache_size",
                        "value": 0
                    },
                    {
                        "name": "raft_term",
                        "value": 1
                    },
                    {
                        "name": "follower_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "log_reader_bytes_read",
                        "value": 0
                    },
                    {
                        "name": "log_reader_entries_read",
                        "value": 0
                    },
                    {
                        "name": "log_reader_read_batch_latency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_bytes_logged",
                        "value": 40
                    },
                    {
                        "name": "log_sync_latency",
                        "total_count": 2,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_append_latency",
                        "total_count": 2,
                        "min": 29,
                        "mean": 31.5,
                        "percentile_75": 34,
                        "percentile_95": 34,
                        "percentile_99": 34,
                        "percentile_99_9": 34,
                        "percentile_99_99": 34,
                        "max": 34,
                        "total_sum": 63
                    },
                    {
                        "name": "log_group_commit_latency",
                        "total_count": 2,
                        "min": 58,
                        "mean": 180.5,
                        "percentile_75": 302,
                        "percentile_95": 302,
                        "percentile_99": 302,
                        "percentile_99_9": 302,
                        "percentile_99_99": 302,
                        "max": 303,
                        "total_sum": 361
                    },
                    {
                        "name": "log_roll_latency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_entry_batches_per_group",
                        "total_count": 2,
                        "min": 1,
                        "mean": 1,
                        "percentile_75": 1,
                        "percentile_95": 1,
                        "percentile_99": 1,
                        "percentile_99_9": 1,
                        "percentile_99_99": 1,
                        "max": 1,
                        "total_sum": 2
                    }
                ]
            }
        ],
        'mock-server2': [
            {
                "type": "tablet",
                "id": "40905d4ba75e41558996b74bb9c0c3a0",
                "attributes": {
                    "partition": "HASH (evnt_offr_id) PARTITION 1",
                    "table_name": "impala::cms.kecev_event_offer_rec_l",
                    "table_id": "c5a07bc4c1ae46e29d7eac7ecece4c09"
                },
                "metrics": [
                    {
                        "name": "memrowset_size",
                        "value": 265
                    },
                    {
                        "name": "on_disk_data_size",
                        "value": 0
                    },
                    {
                        "name": "rows_inserted",
                        "value": 0
                    },
                    {
                        "name": "rows_upserted",
                        "value": 0
                    },
                    {
                        "name": "rows_updated",
                        "value": 0
                    },
                    {
                        "name": "rows_deleted",
                        "value": 0
                    },
                    {
                        "name": "insertions_failed_dup_key",
                        "value": 0
                    },
                    {
                        "name": "upserts_as_updates",
                        "value": 0
                    },
                    {
                        "name": "scanner_rows_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_cells_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_bytes_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_rows_scanned",
                        "value": 0
                    },
                    {
                        "name": "scans_started",
                        "value": 0
                    },
                    {
                        "name": "tablet_active_scanners",
                        "value": 0
                    },
                    {
                        "name": "bloom_lookups",
                        "value": 0
                    },
                    {
                        "name": "key_file_lookups",
                        "value": 0
                    },
                    {
                        "name": "delta_file_lookups",
                        "value": 0
                    },
                    {
                        "name": "mrs_lookups",
                        "value": 0
                    },
                    {
                        "name": "bytes_flushed",
                        "value": 0
                    },
                    {
                        "name": "bloom_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "key_file_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_file_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "commit_wait_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "flush_dms_running",
                        "value": 0
                    },
                    {
                        "name": "flush_mrs_running",
                        "value": 0
                    },
                    {
                        "name": "compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_gc_running",
                        "value": 0
                    },
                    {
                        "name": "flush_dms_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "flush_mrs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "scanner_cells_scanned_from_disk",
                        "value": 0
                    },
                    {
                        "name": "scanner_bytes_scanned_from_disk",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_gc_bytes_deleted",
                        "value": 0
                    },
                    {
                        "name": "write_op_duration_client_propagated_consistency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "write_op_duration_commit_wait_consistency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "snapshot_read_inflight_wait_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_minor_compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "delta_major_compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_estimated_retained_bytes",
                        "value": 0
                    },
                    {
                        "name": "delta_minor_compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_major_compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_init_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_delete_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_perform_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "leader_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "state",
                        "value": "RUNNING"
                    },
                    {
                        "name": "op_prepare_queue_length",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "op_prepare_queue_time",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "op_prepare_run_time",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "on_disk_size",
                        "value": 8410803
                    },
                    {
                        "name": "all_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "write_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "alter_schema_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "transaction_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "log_gc_running",
                        "value": 0
                    },
                    {
                        "name": "log_gc_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "majority_done_ops",
                        "value": 0
                    },
                    {
                        "name": "in_progress_ops",
                        "value": 0
                    },
                    {
                        "name": "ops_behind_leader",
                        "value": 0
                    },
                    {
                        "name": "log_cache_num_ops",
                        "value": 0
                    },
                    {
                        "name": "log_cache_size",
                        "value": 0
                    },
                    {
                        "name": "raft_term",
                        "value": 1
                    },
                    {
                        "name": "follower_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "log_reader_bytes_read",
                        "value": 0
                    },
                    {
                        "name": "log_reader_entries_read",
                        "value": 0
                    },
                    {
                        "name": "log_reader_read_batch_latency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_bytes_logged",
                        "value": 40
                    },
                    {
                        "name": "log_sync_latency",
                        "total_count": 2,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_append_latency",
                        "total_count": 2,
                        "min": 29,
                        "mean": 31.5,
                        "percentile_75": 34,
                        "percentile_95": 34,
                        "percentile_99": 34,
                        "percentile_99_9": 34,
                        "percentile_99_99": 34,
                        "max": 34,
                        "total_sum": 63
                    },
                    {
                        "name": "log_group_commit_latency",
                        "total_count": 2,
                        "min": 58,
                        "mean": 180.5,
                        "percentile_75": 302,
                        "percentile_95": 302,
                        "percentile_99": 302,
                        "percentile_99_9": 302,
                        "percentile_99_99": 302,
                        "max": 303,
                        "total_sum": 361
                    },
                    {
                        "name": "log_roll_latency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_entry_batches_per_group",
                        "total_count": 2,
                        "min": 1,
                        "mean": 1,
                        "percentile_75": 1,
                        "percentile_95": 1,
                        "percentile_99": 1,
                        "percentile_99_9": 1,
                        "percentile_99_99": 1,
                        "max": 1,
                        "total_sum": 2
                    }
                ]
            },
            {
                "type": "tablet",
                "id": "40905d4ba75e41558996b74bb9c0c3a0",
                "attributes": {
                    "partition": "HASH (evnt_offr_id) PARTITION 1",
                    "table_name": "impala::cms.kecev_event_offer_rec_l",
                    "table_id": "c5a07bc4c1ae46e29d7eac7ecece4c09"
                },
                "metrics": [
                    {
                        "name": "memrowset_size",
                        "value": 265
                    },
                    {
                        "name": "on_disk_data_size",
                        "value": 0
                    },
                    {
                        "name": "rows_inserted",
                        "value": 0
                    },
                    {
                        "name": "rows_upserted",
                        "value": 0
                    },
                    {
                        "name": "rows_updated",
                        "value": 0
                    },
                    {
                        "name": "rows_deleted",
                        "value": 0
                    },
                    {
                        "name": "insertions_failed_dup_key",
                        "value": 0
                    },
                    {
                        "name": "upserts_as_updates",
                        "value": 0
                    },
                    {
                        "name": "scanner_rows_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_cells_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_bytes_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_rows_scanned",
                        "value": 0
                    },
                    {
                        "name": "scans_started",
                        "value": 0
                    },
                    {
                        "name": "tablet_active_scanners",
                        "value": 0
                    },
                    {
                        "name": "bloom_lookups",
                        "value": 0
                    },
                    {
                        "name": "key_file_lookups",
                        "value": 0
                    },
                    {
                        "name": "delta_file_lookups",
                        "value": 0
                    },
                    {
                        "name": "mrs_lookups",
                        "value": 0
                    },
                    {
                        "name": "bytes_flushed",
                        "value": 0
                    },
                    {
                        "name": "bloom_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "key_file_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_file_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "commit_wait_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "flush_dms_running",
                        "value": 0
                    },
                    {
                        "name": "flush_mrs_running",
                        "value": 0
                    },
                    {
                        "name": "compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_gc_running",
                        "value": 0
                    },
                    {
                        "name": "flush_dms_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "flush_mrs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "scanner_cells_scanned_from_disk",
                        "value": 0
                    },
                    {
                        "name": "scanner_bytes_scanned_from_disk",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_gc_bytes_deleted",
                        "value": 0
                    },
                    {
                        "name": "write_op_duration_client_propagated_consistency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "write_op_duration_commit_wait_consistency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "snapshot_read_inflight_wait_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_minor_compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "delta_major_compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_estimated_retained_bytes",
                        "value": 0
                    },
                    {
                        "name": "delta_minor_compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_major_compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_init_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_delete_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_perform_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "leader_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "state",
                        "value": "RUNNING"
                    },
                    {
                        "name": "op_prepare_queue_length",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "op_prepare_queue_time",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "op_prepare_run_time",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "on_disk_size",
                        "value": 8410803
                    },
                    {
                        "name": "all_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "write_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "alter_schema_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "transaction_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "log_gc_running",
                        "value": 0
                    },
                    {
                        "name": "log_gc_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "majority_done_ops",
                        "value": 0
                    },
                    {
                        "name": "in_progress_ops",
                        "value": 0
                    },
                    {
                        "name": "ops_behind_leader",
                        "value": 0
                    },
                    {
                        "name": "log_cache_num_ops",
                        "value": 0
                    },
                    {
                        "name": "log_cache_size",
                        "value": 0
                    },
                    {
                        "name": "raft_term",
                        "value": 1
                    },
                    {
                        "name": "follower_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "log_reader_bytes_read",
                        "value": 0
                    },
                    {
                        "name": "log_reader_entries_read",
                        "value": 0
                    },
                    {
                        "name": "log_reader_read_batch_latency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_bytes_logged",
                        "value": 40
                    },
                    {
                        "name": "log_sync_latency",
                        "total_count": 2,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_append_latency",
                        "total_count": 2,
                        "min": 29,
                        "mean": 31.5,
                        "percentile_75": 34,
                        "percentile_95": 34,
                        "percentile_99": 34,
                        "percentile_99_9": 34,
                        "percentile_99_99": 34,
                        "max": 34,
                        "total_sum": 63
                    },
                    {
                        "name": "log_group_commit_latency",
                        "total_count": 2,
                        "min": 58,
                        "mean": 180.5,
                        "percentile_75": 302,
                        "percentile_95": 302,
                        "percentile_99": 302,
                        "percentile_99_9": 302,
                        "percentile_99_99": 302,
                        "max": 303,
                        "total_sum": 361
                    },
                    {
                        "name": "log_roll_latency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_entry_batches_per_group",
                        "total_count": 2,
                        "min": 1,
                        "mean": 1,
                        "percentile_75": 1,
                        "percentile_95": 1,
                        "percentile_99": 1,
                        "percentile_99_9": 1,
                        "percentile_99_99": 1,
                        "max": 1,
                        "total_sum": 2
                    }
                ]
            }
        ],
        'mock-server3': [
            {
                "type": "tablet",
                "id": "40905d4ba75e41558996b74bb9c0c3a0",
                "attributes": {
                    "partition": "HASH (evnt_offr_id) PARTITION 1",
                    "table_name": "impala::cms.kecev_event_offer_rec_l",
                    "table_id": "c5a07bc4c1ae46e29d7eac7ecece4c09"
                },
                "metrics": [
                    {
                        "name": "memrowset_size",
                        "value": 265
                    },
                    {
                        "name": "on_disk_data_size",
                        "value": 0
                    },
                    {
                        "name": "rows_inserted",
                        "value": 0
                    },
                    {
                        "name": "rows_upserted",
                        "value": 0
                    },
                    {
                        "name": "rows_updated",
                        "value": 0
                    },
                    {
                        "name": "rows_deleted",
                        "value": 0
                    },
                    {
                        "name": "insertions_failed_dup_key",
                        "value": 0
                    },
                    {
                        "name": "upserts_as_updates",
                        "value": 0
                    },
                    {
                        "name": "scanner_rows_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_cells_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_bytes_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_rows_scanned",
                        "value": 0
                    },
                    {
                        "name": "scans_started",
                        "value": 0
                    },
                    {
                        "name": "tablet_active_scanners",
                        "value": 0
                    },
                    {
                        "name": "bloom_lookups",
                        "value": 0
                    },
                    {
                        "name": "key_file_lookups",
                        "value": 0
                    },
                    {
                        "name": "delta_file_lookups",
                        "value": 0
                    },
                    {
                        "name": "mrs_lookups",
                        "value": 0
                    },
                    {
                        "name": "bytes_flushed",
                        "value": 0
                    },
                    {
                        "name": "bloom_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "key_file_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_file_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "commit_wait_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "flush_dms_running",
                        "value": 0
                    },
                    {
                        "name": "flush_mrs_running",
                        "value": 0
                    },
                    {
                        "name": "compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_gc_running",
                        "value": 0
                    },
                    {
                        "name": "flush_dms_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "flush_mrs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "scanner_cells_scanned_from_disk",
                        "value": 0
                    },
                    {
                        "name": "scanner_bytes_scanned_from_disk",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_gc_bytes_deleted",
                        "value": 0
                    },
                    {
                        "name": "write_op_duration_client_propagated_consistency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "write_op_duration_commit_wait_consistency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "snapshot_read_inflight_wait_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_minor_compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "delta_major_compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_estimated_retained_bytes",
                        "value": 0
                    },
                    {
                        "name": "delta_minor_compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_major_compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_init_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_delete_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_perform_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "leader_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "state",
                        "value": "RUNNING"
                    },
                    {
                        "name": "op_prepare_queue_length",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "op_prepare_queue_time",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "op_prepare_run_time",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "on_disk_size",
                        "value": 8410803
                    },
                    {
                        "name": "all_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "write_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "alter_schema_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "transaction_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "log_gc_running",
                        "value": 0
                    },
                    {
                        "name": "log_gc_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "majority_done_ops",
                        "value": 0
                    },
                    {
                        "name": "in_progress_ops",
                        "value": 0
                    },
                    {
                        "name": "ops_behind_leader",
                        "value": 0
                    },
                    {
                        "name": "log_cache_num_ops",
                        "value": 0
                    },
                    {
                        "name": "log_cache_size",
                        "value": 0
                    },
                    {
                        "name": "raft_term",
                        "value": 1
                    },
                    {
                        "name": "follower_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "log_reader_bytes_read",
                        "value": 0
                    },
                    {
                        "name": "log_reader_entries_read",
                        "value": 0
                    },
                    {
                        "name": "log_reader_read_batch_latency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_bytes_logged",
                        "value": 40
                    },
                    {
                        "name": "log_sync_latency",
                        "total_count": 2,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_append_latency",
                        "total_count": 2,
                        "min": 29,
                        "mean": 31.5,
                        "percentile_75": 34,
                        "percentile_95": 34,
                        "percentile_99": 34,
                        "percentile_99_9": 34,
                        "percentile_99_99": 34,
                        "max": 34,
                        "total_sum": 63
                    },
                    {
                        "name": "log_group_commit_latency",
                        "total_count": 2,
                        "min": 58,
                        "mean": 180.5,
                        "percentile_75": 302,
                        "percentile_95": 302,
                        "percentile_99": 302,
                        "percentile_99_9": 302,
                        "percentile_99_99": 302,
                        "max": 303,
                        "total_sum": 361
                    },
                    {
                        "name": "log_roll_latency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_entry_batches_per_group",
                        "total_count": 2,
                        "min": 1,
                        "mean": 1,
                        "percentile_75": 1,
                        "percentile_95": 1,
                        "percentile_99": 1,
                        "percentile_99_9": 1,
                        "percentile_99_99": 1,
                        "max": 1,
                        "total_sum": 2
                    }
                ]
            },
            {
                "type": "tablet",
                "id": "40905d4ba75e41558996b74bb9c0c3a0",
                "attributes": {
                    "partition": "HASH (evnt_offr_id) PARTITION 1",
                    "table_name": "impala::cms.kecev_event_offer_rec_l",
                    "table_id": "c5a07bc4c1ae46e29d7eac7ecece4c09"
                },
                "metrics": [
                    {
                        "name": "memrowset_size",
                        "value": 265
                    },
                    {
                        "name": "on_disk_data_size",
                        "value": 0
                    },
                    {
                        "name": "rows_inserted",
                        "value": 0
                    },
                    {
                        "name": "rows_upserted",
                        "value": 0
                    },
                    {
                        "name": "rows_updated",
                        "value": 0
                    },
                    {
                        "name": "rows_deleted",
                        "value": 0
                    },
                    {
                        "name": "insertions_failed_dup_key",
                        "value": 0
                    },
                    {
                        "name": "upserts_as_updates",
                        "value": 0
                    },
                    {
                        "name": "scanner_rows_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_cells_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_bytes_returned",
                        "value": 0
                    },
                    {
                        "name": "scanner_rows_scanned",
                        "value": 0
                    },
                    {
                        "name": "scans_started",
                        "value": 0
                    },
                    {
                        "name": "tablet_active_scanners",
                        "value": 0
                    },
                    {
                        "name": "bloom_lookups",
                        "value": 0
                    },
                    {
                        "name": "key_file_lookups",
                        "value": 0
                    },
                    {
                        "name": "delta_file_lookups",
                        "value": 0
                    },
                    {
                        "name": "mrs_lookups",
                        "value": 0
                    },
                    {
                        "name": "bytes_flushed",
                        "value": 0
                    },
                    {
                        "name": "bloom_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "key_file_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_file_lookups_per_op",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "commit_wait_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "flush_dms_running",
                        "value": 0
                    },
                    {
                        "name": "flush_mrs_running",
                        "value": 0
                    },
                    {
                        "name": "compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_gc_running",
                        "value": 0
                    },
                    {
                        "name": "flush_dms_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "flush_mrs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "scanner_cells_scanned_from_disk",
                        "value": 0
                    },
                    {
                        "name": "scanner_bytes_scanned_from_disk",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_gc_bytes_deleted",
                        "value": 0
                    },
                    {
                        "name": "write_op_duration_client_propagated_consistency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "write_op_duration_commit_wait_consistency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "snapshot_read_inflight_wait_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_minor_compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "delta_major_compact_rs_running",
                        "value": 0
                    },
                    {
                        "name": "undo_delta_block_estimated_retained_bytes",
                        "value": 0
                    },
                    {
                        "name": "delta_minor_compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "delta_major_compact_rs_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_init_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_delete_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "undo_delta_block_gc_perform_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "leader_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "state",
                        "value": "RUNNING"
                    },
                    {
                        "name": "op_prepare_queue_length",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "op_prepare_queue_time",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "op_prepare_run_time",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "on_disk_size",
                        "value": 8410803
                    },
                    {
                        "name": "all_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "write_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "alter_schema_transactions_inflight",
                        "value": 0
                    },
                    {
                        "name": "transaction_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "log_gc_running",
                        "value": 0
                    },
                    {
                        "name": "log_gc_duration",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "majority_done_ops",
                        "value": 0
                    },
                    {
                        "name": "in_progress_ops",
                        "value": 0
                    },
                    {
                        "name": "ops_behind_leader",
                        "value": 0
                    },
                    {
                        "name": "log_cache_num_ops",
                        "value": 0
                    },
                    {
                        "name": "log_cache_size",
                        "value": 0
                    },
                    {
                        "name": "raft_term",
                        "value": 1
                    },
                    {
                        "name": "follower_memory_pressure_rejections",
                        "value": 0
                    },
                    {
                        "name": "log_reader_bytes_read",
                        "value": 0
                    },
                    {
                        "name": "log_reader_entries_read",
                        "value": 0
                    },
                    {
                        "name": "log_reader_read_batch_latency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_bytes_logged",
                        "value": 40
                    },
                    {
                        "name": "log_sync_latency",
                        "total_count": 2,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_append_latency",
                        "total_count": 2,
                        "min": 29,
                        "mean": 31.5,
                        "percentile_75": 34,
                        "percentile_95": 34,
                        "percentile_99": 34,
                        "percentile_99_9": 34,
                        "percentile_99_99": 34,
                        "max": 34,
                        "total_sum": 63
                    },
                    {
                        "name": "log_group_commit_latency",
                        "total_count": 2,
                        "min": 58,
                        "mean": 180.5,
                        "percentile_75": 302,
                        "percentile_95": 302,
                        "percentile_99": 302,
                        "percentile_99_9": 302,
                        "percentile_99_99": 302,
                        "max": 303,
                        "total_sum": 361
                    },
                    {
                        "name": "log_roll_latency",
                        "total_count": 0,
                        "min": 0,
                        "mean": 0,
                        "percentile_75": 0,
                        "percentile_95": 0,
                        "percentile_99": 0,
                        "percentile_99_9": 0,
                        "percentile_99_99": 0,
                        "max": 0,
                        "total_sum": 0
                    },
                    {
                        "name": "log_entry_batches_per_group",
                        "total_count": 2,
                        "min": 1,
                        "mean": 1,
                        "percentile_75": 1,
                        "percentile_95": 1,
                        "percentile_99": 1,
                        "percentile_99_9": 1,
                        "percentile_99_99": 1,
                        "max": 1,
                        "total_sum": 2
                    }
                ]
            }
        ]
    }
}

