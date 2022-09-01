import { useCallback } from 'react';

export function Partner({ setPartnerSearch }) {
    const style = {
        cursor: "pointer",
        marginTop: "1rem",
        alignSelf: "baseline",
        border: "1px solid var(--color-green)",
        borderRadius: "var(--radius)",
        color: "var(--color-white)"
    }

    const handlePartnerSearchClick = useCallback(() => {
        setPartnerSearch(true);
      },
      [setPartnerSearch],
    );

    return (
        <div style={style} onClick={handlePartnerSearchClick}>
            <span className="material-symbols-outlined font">person_add</span>
        </div>
    )
}