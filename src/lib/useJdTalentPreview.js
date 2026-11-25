import { useMutation } from "@tanstack/react-query";

import { ApiClient } from "./api";

/**
 * Landing-page JD → talent preview.
 *
 * Hits the public, IP-rate-limited backend endpoint that runs a zero-credit
 * preview search. Returns `{ profiles, total_count }`.
 */
export const useJdTalentPreview = () =>
  useMutation({
    mutationFn: (jd) =>
      ApiClient.post("/jd-to-filters/preview", { jd }).then(
        (r) => r.data?.data ?? { profiles: [], total_count: 0 },
      ),
  });
