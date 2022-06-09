import React, { ReactNode, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";

export const LoadingContext = React.createContext({});

const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    return (
        <LoadingContext.Provider
            value={{
                setLoading,
            }}
        >
            {console.log("ssss", loading)
            }
            {loading && (
                <div className="position-fixed" style={{
                    top: "0",
                    right: "0",
                    left: "0",
                    bottom: "0",
                    zIndex: 1000,
                    backgroundColor: "rgba(0,0,0,0.4)"
                }}>
                    <div style={{
                        width: "100%",
                        height:"100%",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }} >
                        <SyncLoader color="#fff" loading={loading} size={10} />
                    </div>
                </div>
            )
            }
            {children}
        </LoadingContext.Provider >
    );
};

export { LoadingProvider };