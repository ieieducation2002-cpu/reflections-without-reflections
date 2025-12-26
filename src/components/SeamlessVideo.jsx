"use client";
import { useEffect, useRef } from "react";

export default function SeamlessVideo() {
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);

    // We use a ref to track which video is currently "leading" the loop
    // 1 = video1, 2 = video2
    const activeIndex = useRef(1);
    const transitionDuration = 1.5; // seconds

    useEffect(() => {
        const v1 = video1Ref.current;
        const v2 = video2Ref.current;
        if (!v1 || !v2) return;

        // Initial setup
        v1.style.opacity = "1";
        v2.style.opacity = "0";

        // Ensure both are ready
        v1.load();
        v2.load();

        // Start the first one
        v1.play().catch(e => console.log("Autoplay blocked/failed", e));

        const checkTime = () => {
            const active = activeIndex.current === 1 ? v1 : v2;
            const next = activeIndex.current === 1 ? v2 : v1;

            if (!active.duration) return;

            const timeLeft = active.duration - active.currentTime;

            // Start transition slightly before end
            if (timeLeft <= transitionDuration) {
                // Start the next video if it's not currently playing properly
                if (next.paused || next.currentTime === 0) {
                    next.currentTime = 0;
                    next.play().catch(e => console.log("Play failed", e));

                    // Cross fade
                    next.style.opacity = "1";
                    active.style.opacity = "0";

                    // Swap index immediately so we don't trigger this block again for the current video
                    activeIndex.current = activeIndex.current === 1 ? 2 : 1;
                }
            }
        };

        const handleEnded = (e) => {
            // When a video actually ends, ensure it's firmly reset
            // The other video should already be playing and visible
            e.target.pause();
            e.target.currentTime = 0;
            e.target.style.opacity = "0";
        };

        v1.addEventListener("timeupdate", checkTime);
        v2.addEventListener("timeupdate", checkTime);
        v1.addEventListener("ended", handleEnded);
        v2.addEventListener("ended", handleEnded);

        return () => {
            v1.removeEventListener("timeupdate", checkTime);
            v2.removeEventListener("timeupdate", checkTime);
            v1.removeEventListener("ended", handleEnded);
            v2.removeEventListener("ended", handleEnded);
        };
    }, []);

    return (
        <>
            <video
                ref={video1Ref}
                muted
                playsInline
                className="background-image seamless-video"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: `opacity ${transitionDuration}s ease-in-out`
                }}
            >
                <source src="/background.mp4" type="video/mp4" />
            </video>
            <video
                ref={video2Ref}
                muted
                playsInline
                className="background-image seamless-video"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0,
                    transition: `opacity ${transitionDuration}s ease-in-out`
                }}
            >
                <source src="/background.mp4" type="video/mp4" />
            </video>
        </>
    );
}
