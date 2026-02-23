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

export default function ProfileWidget({ close }) {
  return (
    <>
      <div className="absolute top-[110px] right-0 ">
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
            onClick={close}
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
          <h4 className="bold mb-4 ">أهلا الاسم</h4>

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
              تغيير كلمة المرور
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.586 17.4142C2.2109 17.7891 2.00011 18.2978 2 18.8282V21.0002C2 21.2654 2.10536 21.5197 2.29289 21.7073C2.48043 21.8948 2.73478 22.0002 3 22.0002H6C6.26522 22.0002 6.51957 21.8948 6.70711 21.7073C6.89464 21.5197 7 21.2654 7 21.0002V20.0002C7 19.7349 7.10536 19.4806 7.29289 19.2931C7.48043 19.1055 7.73478 19.0002 8 19.0002H9C9.26522 19.0002 9.51957 18.8948 9.70711 18.7073C9.89464 18.5197 10 18.2654 10 18.0002V17.0002C10 16.7349 10.1054 16.4806 10.2929 16.2931C10.4804 16.1055 10.7348 16.0002 11 16.0002H11.172C11.7024 16 12.211 15.7893 12.586 15.4142L13.4 14.6002C14.7898 15.0843 16.3028 15.0825 17.6915 14.5949C19.0801 14.1074 20.2622 13.163 21.0444 11.9163C21.8265 10.6696 22.1624 9.19433 21.9971 7.7319C21.8318 6.26946 21.1751 4.90641 20.1344 3.86573C19.0937 2.82505 17.7307 2.16834 16.2683 2.00305C14.8058 1.83776 13.3306 2.17366 12.0839 2.9558C10.8372 3.73795 9.89279 4.92003 9.40525 6.30868C8.91771 7.69733 8.91585 9.21033 9.4 10.6002L2.586 17.4142Z"
                  stroke="#19156C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 8C16.7761 8 17 7.77614 17 7.5C17 7.22386 16.7761 7 16.5 7C16.2239 7 16 7.22386 16 7.5C16 7.77614 16.2239 8 16.5 8Z"
                  fill="#19156C"
                  stroke="#19156C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

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
              تسجيل الخروج
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 17L21 12L16 7"
                  stroke="#19156C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 12H9"
                  stroke="#19156C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                  stroke="#19156C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
