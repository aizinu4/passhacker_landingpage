/**
 * Global Video Coordinator
 * 
 * Ensures only one video can play at any time across the entire page.
 * Listens to tab visibility changes to pause playing video when user switches tabs.
 */

const VIDEO_PLAY_EVENT = "passhacker:video-play";

export function notifyVideoPlaying(videoId: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(VIDEO_PLAY_EVENT, { detail: { activeVideoId: videoId } })
    );
  }
}

export function subscribeToVideoCoordinator(
  currentVideoId: string,
  onOtherVideoPlaying: () => void
): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<{ activeVideoId: string }>;
    if (customEvent.detail && customEvent.detail.activeVideoId !== currentVideoId) {
      onOtherVideoPlaying();
    }
  };

  window.addEventListener(VIDEO_PLAY_EVENT, handler);
  return () => {
    window.removeEventListener(VIDEO_PLAY_EVENT, handler);
  };
}
