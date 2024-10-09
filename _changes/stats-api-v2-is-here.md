---
layout: change
title: Stats API V2 is here.
date: 2024-10-08T18:13:10.100Z
---
W﻿e have made significant improvements to the Stats API: a way to retrieve your stats programmatically. The [new V2](https://plausible.io/docs/stats-api) offers simpler querying, more flexibility with custom metrics, filters, and time ranges, and better performance when handling complex queries and large datasets.

Q﻿uick overview of the new capabilities:

1. The new API supports breakdowns by multiple dimensions (previously named properties) and time ranges.
2. Interactive documentation and [playground](https://plausible.io/docs/stats-api-playground) which allows testing out queries in the documentation itself.
3. New dimensions \`visit:country_name\`, \`visit:region_name\` and \`visit:city_name\` which simplify analyzing user behavior by location.
4. New API supports custom ordering of results.
5. Improved filtering –

   1. New structure requires less work from users to escape things.
   2. New regular expression matching operator.
   3. Complex conditions using OR/AND/NOT conditions.
6. Increased limits for users on how much data is returned by a request for ease-of-use.