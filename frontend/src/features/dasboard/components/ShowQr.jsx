import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "../styles/ShowQr.css";

export default function QRModal({ onGenerate, qrData, loading }) {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleClick = async () => {
        await onGenerate();
        setIsOpen(true);
    };

    const downloadQr = () => {
        const canvas = document.getElementById("qr-canvas");
        const url = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = url;
        link.download = "my-qr-code.png";
        link.click();
    };

    const copyLink = () => {
        navigator.clipboard.writeText(qrData.qrUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
    };

    return (
        <>
            <button
                className="generate-btn"
                onClick={handleClick}
                disabled={loading}
            >
                Generate link & QR
            </button>

            {isOpen && qrData && (
                <div
                    className="qr-modal-overlay"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="qr-modal-card"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="qr-modal-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        <h1 className="qr-modal-title">Your link is ready</h1>
                        <p className="qr-modal-subtitle">
                            Share the link, or let people scan the QR.
                        </p>

                        <div className="qr-code-wrapper">
                            <QRCodeCanvas
                                id="qr-canvas"
                                value={qrData.qrUrl}
                                size={170}
                                level="H"
                                includeMargin
                            />
                        </div>

                        <p className="qr-live-label">Your live link</p>
                        <a
                            className="qr-live-link"
                            href={qrData.qrUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {qrData.qrUrl.replace(/^https?:\/\//, "")}
                        </a>

                        <div className="qr-modal-actions">
                            <button className="qr-copy-btn" onClick={copyLink}>
                                {copied ? "Copied!" : "Copy link"}
                            </button>
                            <button
                                className="qr-download-btn"
                                onClick={downloadQr}
                            >
                                Download QR
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
