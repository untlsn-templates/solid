# Opis katalogu

SolidJS w odrużnieniu od React'a nie posiada hooków, wiec w tym katalogu najlepiej umieszczać "brudne" funkcje np.
- wymagające uzycia roota (createRoot) np. createEffect, createMemo
- uzywające solidowego lifecycle np. onMount, onCleanup
- mające side effecty
