import { useState } from "react";

const AVATAR_URL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Ccircle cx='76' cy='76' r='76' fill='%23e8d5c4'/%3E%3Ccircle cx='76' cy='60' r='28' fill='%23c4956a'/%3E%3Cellipse cx='76' cy='130' rx='46' ry='36' fill='%23c4956a'/%3E%3C/svg%3E";

function UploadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M13 6L10 3L7 6"
        stroke="#19156C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 3V13"
        stroke="#19156C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17H16"
        stroke="#19156C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M13 4.5C13.22 4.5 13.43 4.592 13.578 4.756L15 6H16.5C17.328 6 18 6.672 18 7.5V15C18 15.828 17.328 16.5 16.5 16.5H3.5C2.672 16.5 2 15.828 2 15V7.5C2 6.672 2.672 6 3.5 6H5L6.424 4.754C6.572 4.591 6.78 4.5 7 4.5H13Z"
        stroke="#19156C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="10"
        cy="11"
        r="2.5"
        stroke="#19156C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M13 3L3 13"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3L13 13"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function UserProfilePopup() {
  const [visible, setVisible] = useState(true);
  const [showDemo, setShowDemo] = useState(false);

  if (!visible) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f0f2ff 0%, #e8eaf6 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <p style={{ color: "#19156C", fontSize: "16px", fontWeight: 500 }}>
          Popup closed
        </p>
        <button
          onClick={() => setVisible(true)}
          style={{
            background: "#19156C",
            color: "#fff",
            border: "none",
            borderRadius: "24px",
            padding: "12px 28px",
            fontSize: "15px",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
          }}
        >
          Reopen
        </button>
      </div>
    );
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #eff1ff 0%, #e3e6f5 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Sans', sans-serif",
          padding: "24px",
        }}
      >
        {/* Card */}
        <div
          style={{
            width: "336px",
            background: "#fff",
            borderRadius: "30px",
            padding: "28px 20px 28px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
            position: "relative",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setVisible(false)}
            style={{
              position: "absolute",
              top: "22px",
              right: "22px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <CloseIcon />
          </button>

          {/* Avatar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                width: "152px",
                height: "152px",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                background: "#e8d5c4",
                flexShrink: 0,
              }}
            >
              <img
                src="https://i.pravatar.cc/152?img=47"
                alt="Profile"
                width="152"
                height="152"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Username Badge */}
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
              padding: "0 20px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                color: "#19156C",
                fontSize: "13.5px",
                fontWeight: 600,
                letterSpacing: "0.01em",
                flex: 1,
              }}
            >
              @JuanGang.nan
            </span>
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "4px",
              }}
            >
              <UploadIcon />
            </button>
          </div>

          {/* Take Photo Row */}
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
              padding: "0 20px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                color: "#19156C",
                fontSize: "13.5px",
                fontWeight: 600,
                letterSpacing: "0.01em",
                flex: 1,
              }}
            >
              @JuanGang.uu
            </span>
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "4px",
              }}
            >
              <CameraIcon />
            </button>
          </div>

          {/* Sign In Button */}
          <button
            style={{
              width: "100%",
              background: "#19156C",
              color: "#fff",
              border: "none",
              borderRadius: "25.5px",
              height: "51px",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.01em",
              boxShadow: "0 8px 24px rgba(25,21,108,0.35)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(25,21,108,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(25,21,108,0.35)";
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}
