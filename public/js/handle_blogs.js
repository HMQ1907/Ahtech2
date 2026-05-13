$(document).ready(function () {
    let title_vi_error = $("#title-vi-error");
    let title_en_error = $("#title-en-error");
    let short_description_vi_error = $("#short-description-vi-error");
    let short_description_en_error = $("#short-description-en-error");
    let content_vi_error = $("#content-vi-error");
    let content_en_error = $("#content-en-error");
    let image_error = $("#image-error");

    $("#save-blog").click(function (e) {
        let blog_id = $("#blog-form").data("blog-id");
        // let title_vi = $("#title_vi").val();
        // let title_en = $("#title_en").val();
        // let short_description_vi = $("#short_description_vi").val();
        // let short_description_en = $("#short_description_en").val();
        // // let content_vi = CKEDITOR.instances.content_vi.getData();
        // // let content_en = CKEDITOR.instances.content_en.getData();
        // let is_active = $("#is_active").prop("checked") ? 1 : 0;
        // let image = $("#image-upload")[0].files[0];

        // title_vi_error.text("");
        // title_en_error.text("");
        // short_description_vi_error.text("");
        // short_description_en_error.text("");
        // content_vi_error.text("");
        // content_en_error.text("");
        // image_error.text("");

        // if (!title_vi) title_vi_error.text("Vui lòng nhập tiêu đề Tiếng Việt.");
        // if (!title_en) title_en_error.text("Vui lòng nhập tiêu đề Tiếng Anh.");
        // // if (!content_vi)
        // //     content_vi_error.text("Vui lòng nhập nội dung Tiếng Việt.");
        // // if (!content_en)
        // //     content_en_error.text("Vui lòng nhập nội dung Tiếng Anh.");
        // if (!image && !blog_id) image_error.text("Vui lòng chọn hình ảnh.");

        // if (
        //     title_vi_error.text() ||
        //     title_en_error.text() ||
        //     content_vi_error.text() ||
        //     content_en_error.text() ||
        //     image_error.text()
        // ) {
        //     return false;
        // }

        // let formData = new FormData();
        // formData.append("title_vi", title_vi);
        // formData.append("title_en", title_en);
        // formData.append("short_description_vi", short_description_vi);
        // formData.append("short_description_en", short_description_en);
        // // formData.append("content_vi", content_vi);
        // // formData.append("content_en", content_en);
        // formData.append("is_active", is_active);

        // if (image) {
        //     formData.append("image", image);
        // }

        let url = blog_id
            ? update_blog_url.replace(":id", blog_id)
            : create_blog_url;

        $.ajax({
            url: url,
            method: "POST",
            data: {
                title_en: "t",
            },
            processData: false,
            contentType: false,
            success: function (response) {
                if (response.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Thành công",
                        text: response.message,
                        willClose: () => {
                            window.location.href = response.redirect;
                        },
                    });
                } else if (response.error) {
                    Swal.fire({
                        icon: "error",
                        title: "Lỗi",
                        text: response.error,
                    });
                } else if (response.errors) {
                    $.each(response.errors, function (key, errorMsg) {
                        $("#" + key + "-error").text(errorMsg[0]);
                    });
                }
            },
            error: function (xhr) {
                console.error("Error:", xhr);
                Swal.fire({
                    icon: "error",
                    title: "Lỗi",
                    text: "Đã xảy ra lỗi khi lưu bài viết. Vui lòng thử lại sau.",
                });
            },
        });
    });

    $("#image-upload").change(function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                $("#preview-image").attr("src", e.target.result);
                $("#image-preview").removeClass("hidden");
                $("#remove-image").removeClass("hidden");
            };
            reader.readAsDataURL(file);
        }
    });

    // Remove image functionality
    $("#remove-image").click(function () {
        $("#image-upload").val("");
        $("#preview-image").attr("src", "");
        $("#image-preview").addClass("hidden");
        $(this).addClass("hidden");
    });
});
