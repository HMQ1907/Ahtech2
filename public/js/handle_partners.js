$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const partner_name_url = urlParams.get("name");
    let nameError = $("#name-error");
    let logoError = $("#logo-error");

    // $("#name").val(partner_name_url);

    if (partner_name_url) {
        $("#search-partner").click();
    }

    $(document).on("click", ".pagination a", function (e) {
        e.preventDefault();

        let nextPageUrl = $(this).attr("href");
        let params = new URLSearchParams(nextPageUrl.split("?")[1]);

        let currentParams = new URLSearchParams(window.location.search);
        params.forEach(function (value, key) {
            currentParams.set(key, value);
        });

        let newUrl = window.location.pathname + "?" + currentParams.toString();

        history.pushState({}, "", newUrl);

        $.ajax({
            url: nextPageUrl,
            method: "GET",
            success: function (response) {
                if (response.html) {
                    $("#table-partner-info").html(response.html);
                } else {
                    $("#table-partner-info").html(
                        '<div class="p-4 text-center text-gray-500">Không có dữ liệu</div>'
                    );
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Lỗi",
                    text: "Đã xảy ra lỗi khi tải dữ liệu.",
                });
            },
        });
    });

    // Handle Enter key press in search fields
    $("#name, #status, #date_from, #date_to").keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#search-partner").click();
        }
    });

    // Search button click handler
    $("#search-partner").click(function (e) {
        e.preventDefault();
        searchPartners();
    });

    // Clear search button click handler
    $("#clear-search").click(function (e) {
        e.preventDefault();

        $("#name").val("");
        $("#status").val("");
        $("#date_from").val("");
        $("#date_to").val("");
        searchPartners();
    });

    // Search function
    function searchPartners() {
        let name = $("#name").val();
        let status = $("#status").val();
        let date_from = $("#date_from").val();
        let date_to = $("#date_to").val();

        let searchParams = new URLSearchParams();
        if (name) searchParams.append("name", name);
        if (status) searchParams.append("status", status);
        if (date_from) searchParams.append("date_from", date_from);
        if (date_to) searchParams.append("date_to", date_to);

        let urlWithParams =
            window.location.pathname + "?" + searchParams.toString();
        history.pushState(null, null, urlWithParams);

        $.ajax({
            url: urlWithParams,
            method: "GET",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            },
            success: function (response) {
                if (response.html) {
                    $("#table-partner-info").html(response.html);
                } else if (response.error) {
                    $("#table-partner-info").html(
                        `<div class="p-4 text-center text-gray-500">${response.error}</div>`
                    );
                } else {
                    $("#table-partner-info").html(
                        '<div class="p-4 text-center text-gray-500">Không có dữ liệu</div>'
                    );
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Lỗi",
                    text: "Đã xảy ra lỗi khi tìm kiếm đối tác.",
                });
            },
        });
    }

    // Logo upload preview
    $("#logo-upload").change(function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                $("#preview-logo").attr("src", e.target.result);
                $("#logo-preview").removeClass("hidden");
                $("#remove-logo").removeClass("hidden");
            };
            reader.readAsDataURL(file);
        }
    });

    $("#remove-logo").click(function () {
        $("#logo-upload").val("");
        $("#preview-logo").attr("src", "");
        $("#logo-preview").addClass("hidden");
        $(this).addClass("hidden");
    });

    $("#save-partner").click(function () {
        nameError.text("");
        logoError.text("");

        const partnerId = $("#partner-form").data("partner-id");
        const formData = new FormData();
        const name = $("#name").val().trim();
        const isActive = $("#is_active").is(":checked") ? 1 : 0;

        if (!name) {
            nameError.text("Vui lòng nhập tên đối tác.");
            return;
        }

        formData.append("name", name);
        formData.append("is_active", isActive);

        if ($("#logo-upload")[0].files.length > 0) {
            formData.append("logo", $("#logo-upload")[0].files[0]);
        } else if (!partnerId) {
            logoError.text("Vui lòng tải lên logo đối tác.");
            return;
        }

        let url;
        let method = "POST";
        if (partnerId) {
            url = edit_partner_url.replace(":id", partnerId);
            formData.append("_method", "PUT");
        } else {
            url = create_partner_url;
        }

        // CSRF token
        const csrfToken = $('meta[name="csrf-token"]').attr("content");

        $.ajax({
            url: url,
            method: method,
            data: formData,
            processData: false,
            contentType: false,
            headers: {
                "X-CSRF-TOKEN": csrfToken,
                Accept: "application/json",
            },
            success: function (response) {
                if (response.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Thành công",
                        text: response.success,
                        willClose: () => {
                            window.location.href = response.redirect;
                        },
                    });
                }
            },
            error: function (xhr) {
                console.log(xhr);
                if (xhr.status === 422) {
                    const errors = xhr.responseJSON.errors;
                    if (errors.name) {
                        nameError.text(errors.name[0]);
                    }
                    if (errors.logo) {
                        logoError.text(errors.logo[0]);
                    }
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Lỗi",
                        text: "Đã xảy ra lỗi khi lưu đối tác.",
                    });
                }
            },
        });
    });

    // Delete partner button click handler
    $(document).on("click", ".delete-partner", function () {
        const partnerId = $(this).data("partner-id");
        const partnerName = $(this)
            .closest("tr")
            .find("td:nth-child(3)")
            .text()
            .trim();

        Swal.fire({
            title: "Xác nhận",
            text: `Bạn có muốn xóa đối tác "${partnerName}" không?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Đồng ý",
            cancelButtonText: "Hủy bỏ",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
        }).then((result) => {
            if (result.isConfirmed) {
                const csrfToken = $('meta[name="csrf-token"]').attr("content");

                $.ajax({
                    url: delete_partner_url.replace(":id", partnerId),
                    method: "DELETE",
                    headers: {
                        "X-CSRF-TOKEN": csrfToken,
                        Accept: "application/json",
                    },
                    success: function (response) {
                        if (response.success) {
                            Swal.fire({
                                icon: "success",
                                title: "Thành công",
                                text: response.success,
                                willClose: () => {
                                    window.location.reload();
                                },
                            });
                        }
                    },
                    error: function () {
                        Swal.fire({
                            icon: "error",
                            title: "Lỗi",
                            text: "Đã xảy ra lỗi khi xóa đối tác.",
                        });
                    },
                });
            }
        });
    });

    $(document).on("click", ".toggle-status", function () {
        const partnerId = $(this).data("partner-id");
        const partnerName = $(this)
            .closest("tr")
            .find("td:nth-child(3)")
            .text()
            .trim();
        const isActive = $(this)
            .closest("tr")
            .find(".status-badge span")
            .hasClass("bg-green-100");
        const statusText = isActive ? "vô hiệu hóa" : "kích hoạt";
        const csrfToken = $('meta[name="csrf-token"]').attr("content");

        Swal.fire({
            title: "Xác nhận",
            text: `Bạn có muốn ${statusText} đối tác "${partnerName}" không?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Đồng ý",
            cancelButtonText: "Hủy bỏ",
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: toggle_status_partner_url.replace(":id", partnerId),
                    method: "PATCH",
                    headers: {
                        "X-CSRF-TOKEN": csrfToken,
                        Accept: "application/json",
                    },
                    success: function (response) {
                        if (response.success) {
                            const statusBadge = $(
                                `.toggle-status[data-partner-id="${partnerId}"]`
                            )
                                .closest("tr")
                                .find(".status-badge");

                            if (response.is_active) {
                                statusBadge.html(
                                    '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Đang hoạt động</span>'
                                );
                                $(
                                    `.toggle-status[data-partner-id="${partnerId}"]`
                                ).attr("title", "Vô hiệu hóa");
                            } else {
                                statusBadge.html(
                                    '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Không hoạt động</span>'
                                );
                                $(
                                    `.toggle-status[data-partner-id="${partnerId}"]`
                                ).attr("title", "Kích hoạt");
                            }

                            Swal.fire({
                                icon: "success",
                                title: "Thành công",
                                text: response.success,
                            });
                        }
                    },
                    error: function (error) {
                        console.log(error);

                        Swal.fire({
                            icon: "error",
                            title: "Lỗi",
                            text: "Đã xảy ra lỗi khi cập nhật trạng thái đối tác.",
                        });
                    },
                });
            }
        });
    });
});
