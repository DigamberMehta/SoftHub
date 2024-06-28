function incrementDownloadCount(listingId) {
    fetch(`/api/listings/${listingId}/incrementDownloadCount`, {
      method: 'PUT'
    }).then(response => {
      if (response.ok) {
        window.location.href = document.getElementById('download-button').href;
      } else {
        console.error('Failed to increment download count');
      }
    }).catch(error => {
      console.error('Error:', error);
    });
  }