import SuggestItem from './SuggestItem';

const SuggestSection = () => {
    return (
        <section className="mt-3">
            <h5>
                <b>GỢI Ý CHO BẠN</b>
            </h5>
            <div className="d-flex flex-wrap" style={{ gap: '15px' }}>
                <SuggestItem />
                <SuggestItem />
                <SuggestItem />
                <SuggestItem />
            </div>
        </section>
    );
};

export default SuggestSection;
