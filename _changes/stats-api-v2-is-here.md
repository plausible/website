---
layout: change
title: Stats API V2 is here.
date: 2024-10-08T18:13:10.100Z
---
W﻿e have made significant improvements to the [Stats API](https://plausible.io/docs/stats-api-v1). The [new V2](https://plausible.io/docs/stats-api) offers simpler querying, more flexibility with custom metrics, filters, and time ranges, and better performance for handling complex queries and large datasets.

Q﻿uick overview of the new capabilities:

* Unified endpoint (/api/v2/query) handles all query types, simplifying data requests.
* Queries are sent as structured JSON.
* Supports fully customizable date and time ranges using ISO 8601 format.
* Expanded metrics & dimensions
* Complex filters with logical operators (and, or, not) and regex support.
* Pagination, default: `{ "limit": 10000, "offset: 0 }`
* Group data by different time units (hour, day, etc.) directly within queries.
* Advanced import options with detailed feedback in query results.
* Query responses include extra meta details like time labels and import statuses for clearer debugging.
* Fully JSON-Based.