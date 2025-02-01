import { useDataStore } from '../store';

function getLanguageName(code: string, locale = "en") {
    return new Intl.DisplayNames([locale], { type: "language" }).of(code) || code;
}

function formatCurrency(amount: number, currency = "USD", locale = "en-US") {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency
    }).format(amount);
}

function Sidebar() {
    const detailsData = useDataStore((state) => state.detailsData);
    if (!detailsData) {
        return <p>Loading...</p>;
    }
    const { status, original_language, budget, revenue } = detailsData;
    return (
        <aside>
            <div className="sidebar-details mb-4">
                <h3 className="text-lg font-bold text-slate-700">Status</h3>
                <p>{status}</p>
            </div>
            <div className="sidebar-details mb-4">
                <h3 className="text-lg font-bold text-slate-700">Original Language</h3>
                <p>{getLanguageName(original_language)}</p>
            </div>
            <div className="sidebar-details mb-4">
                <h3 className="text-lg font-bold text-slate-700">Budget</h3>
                <p>{formatCurrency(budget)}</p>
            </div>
            <div className="sidebar-details mb-4">
                <h3 className="text-lg font-bold text-slate-700">Revenue</h3>
                <p>{formatCurrency(revenue)}</p>
            </div>
        </aside>
    )
}

export default Sidebar;
