# Opis katalogu

SolidJS w odrużnieniu od React'a nie posiada hooków, wiec w tym katalogu najlepiej umieszczać "brudne" funkcje np.
- wymagające uzycia roota (createRoot) np. createEffect, createMemo
- uzywające solidowego lifecycle np. onMount, onCleanup
- mające side-effect'y

Unlike React, SolidJS doesn't have hooks, so it's best to put "dirty" functions in this directory, e.g.
- requiring root (createRoot) e.g. createEffect, createMemo
- using a solid lifecycle, e.g. onMount, onCleanup
- having side effects
