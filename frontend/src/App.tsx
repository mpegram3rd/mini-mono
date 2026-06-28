import { useState } from 'react'
import {getReason} from "./services/api.ts";
import './App.css'

function App() {
    const [reason, setReason] = useState('');
    const [loading, setLoading] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleReason = async (sayYes: boolean) => {
        const direction = sayYes ? 'yes' : 'no';
        setLoading(direction)
        setError(null);
        try {
            const data = await getReason(sayYes)
            setReason(data.reason);
        }
        catch (error) {
            setError(error instanceof Error ? error.message : 'Something broke');
        }
        finally {
            setLoading(null);
        }

    }
    return (
        <>
            <section className="center">
                <button
                    type="button"
                    className="yes"
                    onClick={() => handleReason(true)}
                    disabled={loading != null}
                >
                    Say Yes
                </button>
                <button
                    type="button"
                    className="no"
                    onClick={() => handleReason(false)}
                    disabled={loading != null}
                >
                    Say No
                </button>
            </section>
            <section className="center">
                <textarea
                    className="reasons"
                    value={reason}
                    readOnly={true}
                    rows={2}
                    placeholder="Click a button to get a reason..."
                />
            </section>
            <section className="center">
                {error && <p className="error">{error}</p>}
            </section>
        </>
    )
}

export default App
